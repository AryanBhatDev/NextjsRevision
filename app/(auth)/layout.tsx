import { ReactElement } from "react";


export default function Header({children}:{children:ReactElement}){
    return <div>
        THIS IS A QUIZ
        {children}
    </div>
}