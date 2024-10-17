import React, { useEffect, useState } from 'react';
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import { generateWorkout } from '../utils/functions'

const Section2 = (props) => {
    const {setcardsData} = props
    const [expandWorkoutCombo , setexpandWorkoutCombo] = useState(false)

    const [poison,setPoison] = useState('Individual');
    const [poison2,setPoison2] = useState('individual');

    const [muscles,setMuscles] = useState([]);
    const [goals,setGoals] = useState('Strength power');

    //let expandWorkoutCombo = false;
    function toggleExpandWorkOutCombo(){
        //expandWorkoutCombo = !expandWorkoutCombo;
        setexpandWorkoutCombo(!expandWorkoutCombo);
    }

    // if (poison==='Individual' && poison2 !=='individual' ){
    //     setPoison2("individual")
    // }else if(poison==='Bro Split' && poison2 !=='bro_split'){
    //     setPoison2('bro_split' )
    // }else if(poison==='Bodybuilder Split' && poison2 !=='bodybuilder_split'){
    //     setPoison2('bodybuilder_split')
    // }else if(poison==='Upper Lower' && poison2 !=='upper_lower'){
    //     setPoison2('upper_lower')
    // }

    useEffect(()=>{
    if (poison==='Individual'  ){
        setPoison2("individual")
    }else if(poison==='Bro Split' ){
        setPoison2('bro_split' )
    }else if(poison==='Bodybuilder Split' ){
        setPoison2('bodybuilder_split')
    }else if(poison==='Upper Lower' ){
        setPoison2('upper_lower')
    }

    },[poison]);
    
    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            // setShowModal(false)
            // return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            // setShowModal(false)
        }

    }

    return (
        <div className='section2' id='section2'>
            <div className="s2header">
                <h4 className='white-text uppercase'>generate your workout</h4>
                <h1 className='white-text uppercase'>It&apos;s <span className='colored-text uppercase'>Huge</span> o&apos;clock</h1>
            </div>
            <div className='workout1'>
                <h2><span>01</span> Pick your poison</h2>
                <p>Select the workout you wish to endure.</p>

                <button className='btn-workout' onClick={()=>setPoison('Individual')}>Individual</button>
                <button className='btn-workout' onClick={()=>setPoison('Bro Split')}>Bro Split</button>
                <button className='btn-workout' onClick={()=>setPoison('Bodybuilder Split')}>Bodybuilder Split</button>
                <button className='btn-workout' onClick={()=>setPoison('Upper Lower')}>Upper Lower</button>
            </div>
            <div className="workout2 ">
                <h2><span>02</span> Lock on targets</h2>
                <p>Select the muscles judged for annihilation.</p>
                <div className='btn-workout combo-container'>
                    <div className='workout2-combo uppercase' 
                    onClick={()=>{
                        toggleExpandWorkOutCombo();
                    }}
                    // onClick={toggleExpandWorkOutCombo}
                    >
                        <p>Select muscle groups</p>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                    <div className='poisionlist'>
                        {(expandWorkoutCombo) && (
                            <>
                            {(poison === 'Individual' ? WORKOUTS[poison2] : Object.keys(WORKOUTS[poison2])).map((muscleGroup, muscleGroupIndex) => {
                                return (
                                    <button onClick={() => {
                                        //setMuscles(muscleGroup)
                                        updateMuscles(muscleGroup)
                                    }} key={muscleGroupIndex }>
                                        <p className='uppercase'>{muscleGroup}</p>
                                    </button>
                                )
                            })}
                            </>    
                        )}

                    </div>
                </div>
            </div>
            <div className="workout3 ">
                <h2><span>03</span> Become Juggernaut</h2>
                <p>Select your ultimate objective.</p>

                <button className='btn-workout'
                onClick={()=>setGoals('strength_power')}
                >Strength Power</button>
                <button className='btn-workout'
                onClick={()=>setGoals('growth_hypertrophy')}
                >Growth Hypertrophy</button>
                <button className='btn-workout'
                onClick={()=>setGoals('cardiovascular_endurance')}
                >Cardiovascular Endurance</button>
            </div>

            <div className="workout4 ">
                <h2><span>04</span> Formulate</h2>
                <p></p>

                <button className='btn-workout'
                onClick={()=>{
                    const retval = generateWorkout( {poison2, muscles, goals} );
                    console.log(poison2, muscles, goals);
                    console.log(retval);
                    props.setcardsData(retval);
                }}
                >Formulate</button>
            </div>
        </div>

    );
};

export default Section2;