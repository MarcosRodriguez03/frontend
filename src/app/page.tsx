'use client'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import { useState } from "react";

// by default next.js components are server side (server side compoents cannot have use states in them)
//'use client' turns the compoent into client components.
//the page.tsx inside of our app is our default home page

//this will be our login page and create account page.

export default function Home() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [switchBool, setSwitchBool] = useState<boolean>(true);

  const router = useRouter();


  //function for toggling between our login and create account screen
  const handleSwitch = () => {
    setSwitchBool(!switchBool)
  }
  const handleSubmit = () => {
    //letting our user data inside of an object so we can put it in our post fetch
    let userData = {
      username: username,
      password: password
    }
    if (switchBool === true) {
      //create account logic here


    } else {
      //login logic here
      router.push('/Dashboard');



    }

  }

  return (
    <div className="grid grid-flow-row justify-center mt-20">
      <div className="bg bg-slate-400 min-w-96 p-8 rounded-lg">
        <h1 className='text-3xl'>{switchBool ? 'create account' : 'login '}</h1>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="username" />
            </div>
            <TextInput id="username" type="text" placeholder="enter username" required onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSwitch}
              color="light">{switchBool ? 'already have an account' : 'Sign up'}</Button>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </form>

      </div>

    </div>
  );
}
