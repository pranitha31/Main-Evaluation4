const supabase = require('../config\supabaseClient');
exports.createTrip = async (req, res) => {
    const {customer_id, vehicle_id,start_date,location,distance_km,passengers}=req.body;
    if (!customer_id || !vehicle_id || !start_date || !location || !distance_km || !passengers) {
        return res.status(400).json({ error: 'missing requied fields' });
    }

    const {data:customer}=await supabase
    .from('users')
    .select('*')
    .eq('id',customer_id)
    .single();
    if (!customer || customer.role !== 'customer){
        return res.status(404).json({ error: 'only customer can create a trip' });    
    } 
    const {data:vehicle}=await supabase{
    .from('vehicles')
    .select('*')
    .eq('id',vehicle_id)
    .single();  
    return res.status(404).json({ error: 'vehicle not availbale' });
    }
    if (passengers > vehicle.allowed_passengers){
        return res.status(400).json({error:'passengerr count exceeds allowed limi'});
    }
    const {data,error}=await supabase
    .from('trips')
    .insert([{customer_id,vehicle_id,start_date,location,distance_km,passengers}]);
    if (error) return res.status(500).json({error:error.message});  
    
    await.status(201).json({message:'trip created successfully',trip:data[0]});

};