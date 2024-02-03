import { FC, PropsWithChildren } from 'react';

type GoalsProps = PropsWithChildren<{ id: number; title: string, description: string, onDelete: (id: number) => void }>
const Goals: FC<GoalsProps> = ({ id,title, description, onDelete }) => {
  
  return <article>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <button onClick={() => onDelete(id)}>Delete</button>
  </article>
};

export default Goals;
