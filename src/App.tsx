import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
// import goals from './components/Goals.tsx';
import { Goal } from './types';
import GoalsList from './components/GoalsList.tsx';


export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const addGoalHandler = () => {
    const newGoal: Goal = {
      id: Math.random(),
      title: 'React JS',
      description: 'Learn it from ground up',
    };
    setGoals(prevGoals => {
      return [...prevGoals, newGoal]
    })
  };
  
  const deleteGoalHandler = (id: number) => {
    setGoals(prevState => prevState.filter(goal => goal.id !== id))
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <GoalsList goals={goals} deleteGoalHandler={deleteGoalHandler}/>
    </main>
  );
}
