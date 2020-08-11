import React from 'react'


import '../TeacherItem/style.css'
import api from '../../services/api'

export interface User{
    id: number,
    name: string
}

interface UserProps{
    user: User
}

export interface Teacher{
    id: number,
    name: string,
    nota: string,
}

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    return(
        <article className="teacher-item">
                    <header>
                        
                        <div>
                            <strong>{teacher.name}</strong>
                        </div>

                        <p>                    
                        Nota: {teacher.nota}
                        </p>
                        
                    </header>

                    
                    
        </article>
    )
}

export default TeacherItem