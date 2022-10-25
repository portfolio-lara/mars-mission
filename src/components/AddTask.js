import { useState } from 'react';

const AddTask = ({onSave}) => {
    const [title, setTitle] = useState('');
    const [taskdesc, setTaskdesc]  = useState('');
    const [createdby, setCreatedby]  = useState('');
    const [assignedto, setAssignedto]  = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if (!title && !taskdesc && !createdby && !assignedto) {
            alert('Looks like you have not filled in any fields...');
                }
         else if (!title && !taskdesc && !createdby) {
            alert('Please fill in the title, description, and who you are!');
        }
        else if (!title && !taskdesc && !assignedto) {
            alert('Please fill in the title, description, and who is assigned to this!')
        }

        else if (!title && !createdby && !assignedto) {
            alert('Please add a title, who you are and who is assigned to this!')
              }

        else  if ( !taskdesc && !createdby && !assignedto) {
            alert('Please add a description, who you are and who is assigned to this!')
        } else if (!title && !taskdesc) {
         alert('Gonna need a title and description here, chief');
        }
        else if (!title && !createdby) {
        alert('Please fill in a title and who created this')
        }
        else if (!title && !assignedto) {
        alert('Please add a title and assign this to someone')
        }
        else if (!taskdesc && !assignedto) {
        alert('Please add a task description and assign this to someone')
        }
        else if (!taskdesc && !createdby) {
        alert('Please add a task description and tell us who you are')
        }      
        else if (!createdby && !assignedto) {
            alert('Please fill in your name and volunteer someone')
        }
        //user forgot one
        else if (!title) {
            alert('Not meaning to be enTITLED, but you forgot something')
        }
        else if (!taskdesc) {
            alert('You forgot the task description!')
        }
        else if (!createdby) {
        alert('Gonna need your name and number! Or just your name...')
        }
        else if (!assignedto) {
            alert('Volunteer your favourite Martian to-be')
        }


        else {
            onSave({ title, taskdesc, createdby, assignedto });
        }
        setTitle('');
        setTaskdesc('');
        setCreatedby('');
        setAssignedto('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task title</label>
                <input type="text" placeholder="Task title:" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Task description</label>
                <input type="text" placeholder="Task description:" value={taskdesc} onChange={(e) => setTaskdesc(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Created by</label>
                <input type="text" placeholder="Created by:" value={createdby} onChange={(e) => setCreatedby(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Assigned to</label>
                <input type="text" placeholder="Assign to:" value={assignedto} onChange={(e) => setAssignedto(e.target.value)} />
            </div>
          
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
      )
  }
  export default AddTask