const supabase = require('../config\supabaseClient');

exports.regeisterUser = async (req, res) => {
    const {name, registration, allowed_passengers, rate_per_km, owner_id} =req.body;
    if (!name || !registration || !allowed_passengers || !rate_per_km || !owner_id) {
        return res.status(400).json({ error: 'missing requied fields' });
    }
    const { data, error } = await supabase
    .from('vehicles')
    .insert([{name, registration, allowed_passengers, rate_per_km, owner_id}]);

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'vehicle created successfully' ,vehicle:data[0]});

};
exports.assignDriver = async (req, res) => {
    const { vehicleId, driverId } = req.body;
    if (!vehicleId || !driverId) {
        return res.status(400).json({ error: 'Invalid driver' });
    }
    const { data, error } = await supabase
        .from('vehicles')
        .update({ driver_id: driverId })
        .eq('id', vehicleId);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Driver assigned successfully', vehicle: data[0]});

    exports.getVehicle = async (req, res) => {
        const { vehicleId } = req.params;
        const { data, error } = await supabase
            .from('vehicles')
            .select('*')
            .eq('id', vehicleId)
            .single();
        if (error || !data) return res.status(404).json({ error: 'vehicle not found' });
        res.json(data);
    };
}