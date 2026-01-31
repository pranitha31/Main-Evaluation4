const supabase = require('../config\supabaseClient');

exports.regeisterUser = async (req, res) => {
    const { name, email, password ,role} = req.body;
    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: 'missing requied fields' });
    }
    if (!['customer', 'owner','driver'].includes(role)){
        return res.status(400).json({ error: 'invalid role' });
    
    }
    const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password,role }])

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: 'user created successfully' ,user:data[0]});

};