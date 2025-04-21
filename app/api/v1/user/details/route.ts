import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        email:"aryan@gmail.com",
        name:"Aryan"
    })
}


