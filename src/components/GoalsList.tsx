import Goals from './Goals.tsx';
import { Goal } from '../types';

type GoalsListProps = {
  goals: Goal[];
  deleteGoalHandler: (id: number) => void;
}
const GoalsList = ({ goals, deleteGoalHandler }: GoalsListProps) => {
  return (
    <ul>
      {
        goals.map(g => <li><Goals key={g.id} id={g.id} title={g.title} description={g.description}
                                  onDelete={deleteGoalHandler}/></li>)
      }
    </ul>
  )
  
};


export default GoalsList;
