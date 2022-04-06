async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://tgxiopwytuuakm:02726bc1f54ea42f1bc22ea24ae04c55594ce75fce796a51b5fb669260380e0b@ec2-44-194-167-63.compute-1.amazonaws.com:5432/d4t13gi47ruj2t'
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}