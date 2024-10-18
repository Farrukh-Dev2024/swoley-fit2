import React,{useState} from 'react';


function Section3(props) {
    const { cardsData} = props




    function createCard(exercise,i){
        const [setsCompleted, setSetsComplete] = useState(0)
        
        function handleSetIncrement() {
            setSetsComplete((setsCompleted + 1) % 6)
        }
        return (
            <div className='cardsingle'>
                <div className='cardsingle-row1'>
                    <h4 className='.grey-text'>
                        0{i + 1}
                    </h4>
                    <h2 className=''>{exercise.name.replaceAll("_", " ")}</h2>
                    <p className='grey-text'>{exercise.type}</p>
                </div>
                <div className='cardsingle-row2'>
                    <h3 className='grey-text'>Muscle Groups</h3>
                    <p className='uppercase'>{exercise.muscles.join(' & ')}</p>
                </div>
    
                <div className='cardsingle-row3'>
                    {exercise.description.split('___').map((val) => {
                        return (
                            <p className=''>
                                {val}
                            </p>
                        )
                    })}
                </div>
    
                <div className='cardsingle-row4'>
                    {['reps', 'rest', 'tempo'].map(info => {
                        return (
                            <div key={info} className='grey-text'>
                                <h3 className='uppercase'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
    
                                <p className=''>{exercise[info]}</p>
                            </div>
                        )
                    })}
                    <button onClick={handleSetIncrement} className=''>
                        <h3 className='uppercase'>Sets completed</h3>
                        <p className=''>{setsCompleted} / 5</p>
                    </button>
                </div>
            </div>
        )
        }
    


        
    const retdata = cardsData.map((exercise, i) => {
        return (
                createCard(exercise,i)
            //<ExerciseCard i={i} exercise={exercise} key={i} />
        )
    })
    return (
        <div className='cardsmain'>
            {retdata}
        </div>
        
    );


}


export default Section3;