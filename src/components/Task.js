import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Task = ({ task, onDelete, onEdit }) => {
    return (
      <div>
        <div className="task">
          <div>
            <p className="taskName">
              <span className="textBold">Task title:</span> {task.title}
            </p>
        <p className="taskDate"><span className="textBold">Task description:</span>              {task.taskdesc}
            </p>
            <p className="taskDate"><span className="textBold">Created by:</span>              {task.createdby}
            </p>
            <p className="taskDate"><span className="textBold">Assigned to:</span>              {task.assignedto}
            </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
          </div>
        </div>
      </div>
    )
}
export default Task;