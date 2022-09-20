import { useForm } from 'react-hook-form';

import { Field } from '../../types';

type Props = {
  setFields: React.Dispatch<React.SetStateAction<Field[]>>;
  data: Field;
};

export const EditField = ({ setFields, data }: Props) => {
  const { register, handleSubmit } = useForm<Field>({ defaultValues: data });

  const onSubmit = (data: Field) => {
    console.log(data);
  };

  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('name')} />
      <input type="text" placeholder="Email" {...register('authorEmail')} />
      <select id="genre" {...register('genre')}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <textarea placeholder="Description" {...register('description', { maxLength: 500 })} />
      <input type="number" placeholder="Price" {...register('price', { min: 0, max: 1000 })} />
      <input
        type="number"
        placeholder="Track Length"
        {...register('trackLength', { min: 0, max: 300 })}
      />
      <input type="checkbox" placeholder="isStore" {...register('isStore')} />
      <input type="submit" />
    </form>
  );
};
