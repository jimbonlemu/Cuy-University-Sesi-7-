const http = require('http');
const fs = require('fs')
const rupiah = require('rupiah-format');
const host = '127.0.0.1';
const port = 3002;
const os = require('os');

const server = http.createServer(function(request,response){
    const nama = "Iqbal Maulana";
    const uang = 500000
    const jajan = 150000
    const sisa = uang - jajan

    const rpUang = rupiah.convert(uang)
    const rpJajan = rupiah.convert(jajan)
    const rpSisa = rupiah.convert(sisa)
    fs.appendFile('sisaUang.txt' , rpSisa, ()=>{
        console.log('users log has been saved')
    });


    const sisaRam = os.freemem();
    const jumlahCPU = os.cpus()

    function cekCPU() {

        let myCPU = []
        jumlahCPU.map((cpu, i) =>{
        myCPU.push(cpu.model)
        })
        return myCPU[0]
    }

    console.log(cekCPU())

    const hasil = `
    <head>
    <title>
    ${nama}
    </title>
    </head>
    <body>
    <h1 style= 'background:black;color:white;padding:20px;text-align:center'>NODE JS UANG JAJAN GWH</h1>
    <p>halo nama saya ${nama} jajan sebanyak ${rpJajan}, uang saya tadinya ${rpUang} sekarang menjadi ${rpSisa}<p>
    <h5>sisa ram di lepi saya :${sisaRam}</h5>
    <h5>sisa CPU saya : ${cekCPU()}</h5>
    </body>
    `
    console.log(rpSisa)
    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host, '' ,function () {
    console.log(`server menyala di ${host} : ${port}: 🙄`);
});