import Card from "./Card.jsx";

export default  function Mission(){
    const data = [
        {
            num : '01',
            label: 'communauté',
            text: 'Nous sommes une communauté de personnes ayant un but en commun et ayant convenu de porter les intérêts de Jésus-Christ.'
        },
        {
            num : '02',
            label:'missionnaire',
            text:'Nous sommes un mouvement qui forme et envoie des missionnaires dans le monde entier afin de répondre à la Grande Commission donnée par le Seigneur : "Allez et faites de toutes les nations des disciples" (Matthieu 28:19-20).'
        },
        {
            num : '03',
            label:'missionnaire',
            text:'Nous sommes un mouvement qui forme et envoie des missionnaires dans le monde entier afin de répondre à la Grande Commission donnée par le Seigneur : "Allez et faites de toutes les nations des disciples" (Matthieu 28:19-20).'
        },


    ]




    return <div>
        <h1 className="text-6xl font-bold mt-10 ml-10 mb-10">Notre Ministère</h1>

        <div className="flex justify-evenly flex-wrap ">
            {data.map(mission=><Card {...mission}/>)}
        </div>


    </div>
}