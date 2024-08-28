import jeunesseetvie from '../assets/jeunesseetvie.jpeg';
export default  function Banner(){
    return <div className="flex justify-between items-center mt-[70px]">
        <div className=" ml-10 w-2/3">
            <h1 className="text-6xl font-bold"><span className="text-orange-600">Jeunesse</span> et Vie</h1>
            <p className="mt-4">

                Nous sommes bien plus qu'une simple association ; nous sommes une communauté dédiée à accompagner les étudiants dans leur parcours
                académique et spirituel. Car, comme le dit l'Évangile, <span className="text-orange-600"> à quoi sert-il à un homme de gagner le monde entier, s'il perd son âme?</span>  Nous croyons fermement qu'un chrétien peut non seulement s'épanouir dans sa relation avec Dieu, mais aussi exceller dans chaque aspect de sa vie, que ce soit dans ses études, son travail, ou ses engagements quotidiens. Ensemble, nous aspirons à former des disciples de Christ qui brillent,
                non seulement par leur foi, mais aussi par leur excellence dans tout ce qu'ils entreprennent.
            </p>
        </div>
        <div className="w-1/3 ml-[100px]  hidden lg:block">
<img src={jeunesseetvie} className="w-[300px] h-[300px] object-cover rounded-[50%]  border-8 border-orange-600"/>
        </div>
    </div>}