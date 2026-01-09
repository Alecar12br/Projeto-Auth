import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'


export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
 
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("")
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [error])
    
    const verificar = (Dados: {Email: String, Senha: String, Confirmar: String, }) =>{

      
      setError("")

      if (Dados.Senha === "" || Dados.Confirmar === "" ||  Dados.Email === ""){
      setError("E-mail ou senha faltando")}
      

      else if (Dados.Senha === Dados.Confirmar) {
         
        alert("Usuario registrado!") 
    }

      else if (Dados.Senha !== Dados.Confirmar){
      
      setError("Senhas diferentes")
    }

    else if (Dados.Senha.length <= 7 ) {
      setError("Senha com menos de 8 caracteres")
    }

    
  }

  const pegarOsDados = () => {

    let emailInput = document.getElementById('email') as HTMLInputElement ;
    let senhaInput = document.getElementById('senha') as HTMLInputElement ;
    let confirmInput = document.getElementById('confirmar') as HTMLInputElement ;

    let Dados = {
     Email: emailInput?.value ,
     Senha: senhaInput?.value,
     Confirmar: confirmInput?.value
    }

    verificar(Dados)
    
  };

  return(
    <section className="min-h-screen flex items-center justify-center b bg-gradient-soft-green">
      <div className="flex shadow-2xl" >
        <div className="flex flex-col justify-center items-center text-center p-20 gap-8
         bg-linear-to-b from-white/90 to-white/70 rounded-2xl">
            <div className="flex gap-4 flex-col justify-center items-center text-center">
             <h1 className="text-4xl mb-3 text-black font-medium" >Bem Vindo</h1>
            </div>
            <div className="flex flex-col text-left gap-1 ">
              <span className=" text-black">E-mail:</span>
             <input type="email" name="E-mail" id="email" className="text-black rounded-md p-1 border-2 outline-none border-blue-300 focus:border-cyan-300 focus:bg-slate-50 transition-all duration-300"/>
            </div >
            <div className="flex flex-col text-left gap-1 ">
              <span className='text-black text-'>Senha:</span>
              <input type="password" name="Senha" id="senha" className="text-black rounded-md p-1 border-2 border-blue-300 outline-none focus:border-cyan-300 focus:bg-slate-50 transition-all duration-300"/>
            </div>
            <div className="flex flex-col text-left gap-1 ">
              <span className='text-black text-'>Confirmar Senha:</span>
              <input type="password" name="Senha" id="confirmar" className="text-black rounded-md p-1 border-2 border-blue-300 outline-none focus:border-cyan-300 focus:bg-slate-50 transition-all duration-300"/>
            </div>
            <div className='h-1 flex items-center'>
              {error && (
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: { duration: 0.5 }}} className='text-red-900 text-xs'>
                  {error}
                </motion.p>
              )}
            </div>
            <div>
              <button onClick={pegarOsDados} id='submit' className="bg-cyan-500 rounded-md p-2 px-5 cursor-pointer hover:bg-cyan-300 active:bg-cyan-700 active:text-white transition-all duration-300 font-semibold text-black">Entrar</button>
            </div>
            <div>
              <p className="font-semibold text-black">Já possui uma conta?{" "} <Link to="/" className="text-gray-700 hover:underline ">Entre ja</Link></p>
            </div>
            
        </div>
      </div>
    </section>
  )
    }


