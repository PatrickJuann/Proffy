const dataBase = require ('./db')
const createProffy = require ('./createProffy')

dataBase.then(async (db) => {
    //Inserir Dados

        proffyValue = {
            name: "Patrick Juan",
            avatar: "https://www.tupi.fm/wp-content/uploads/2019/07/homem.jpeg",
            whatsapp: "(41)997852058",
            bio: "BIOGRAFIA AQUI",
        }

        classValue = {
            subject: 1,
            cost: "20,00",
            //o proffy id virá pelo banco de dados
        }

        classScheduleValues = [
        {
                //class id virá pelo banco de dados após cadastrarmos a aula

                weekday: 1,
                time_from: 720,
                time_to: 1220

        },
        {
                weekday: 0,
                time_from: 520,
                time_to: 1220
        }
    ]

    //await createProffy(db,{proffyValue, classValue, classScheduleValues})

    //Consultar os Dados inseridos

    //todos os proffys
    const selectesProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectesProffys)

    //consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabahala, por exemplo, é das 8 até as 18h. O horario do time_from precisa ser menor ou igual ao horario solicitado. O time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1" 
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"        
    `)
    console.log(selectClassesSchedules)

})