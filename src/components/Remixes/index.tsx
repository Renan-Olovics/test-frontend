import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { EditField } from './components/Forms';
import { Field } from './types';

export const Remixes = () => {
  const { register, handleSubmit } = useForm<Field>();
  const [fields, setFields] = useState<Field[]>([] as Field[]);
  const [editInput, setEditInput] = useState<Field>({} as Field);

  const onSubmit = (data: Field) => {
    const hasItem = fields.filter((e) => e.name === data.name).length > 0;

    if (hasItem) return;
    setFields((prevState) => [...prevState, data]);
  };

  const handleDelete = (name: Field['name']) => {
    setFields((prevState) => prevState.filter((field) => field.name !== name));
  };

  const handleEdit = (Field: Field) => {
    setEditInput(Field);
  };

  return (
    <div>
      {!editInput.name && (
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
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>AuthorEmail</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Price</th>
            <th>TrackLength</th>
            <th>IsStore</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => {
            const isEditing = editInput === field;

            return isEditing ? (
              <EditField data={field} setFields={setFields} />
            ) : (
              <tr key={field.name}>
                <td>{field.name}</td>
                <td>{field.authorEmail}</td>
                <td>{field.genre}</td>
                <td>{field.description}</td>
                <td>{field.price || '0'}</td>
                <td>{field.trackLength || '0'}</td>
                <td>{field.isStore ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => handleDelete(field.name)} type="button">
                    ❌
                  </button>
                </td>
                <td>
                  <button onClick={() => handleEdit(field)} type="button">
                    🖋️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
