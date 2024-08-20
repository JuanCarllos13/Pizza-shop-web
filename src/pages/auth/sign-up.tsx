import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos o link de autenticação para o seu email')
  }

  return (
    <>
      <Helmet titleTemplate="Cadastro" />
      <div className="p-8">
        <Button className="absolute right-4 top-8" variant="ghost">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="w-{350px} flex flex-col justify-center gap-6">
          <div>
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tighter">
                Criar conta
              </h1>
              <p className="text-sm text-muted-foreground">
                seja um parceiro e comece suas vendas!
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                <Input
                  id="restaurantName"
                  type="text"
                  {...register('restaurantName')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="managerName">Seu Nome</Label>
                <Input
                  id="managerName"
                  type="text"
                  {...register('managerName')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Seu E-mail</Label>
                <Input id="email" type="email" {...register('email')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Seu Celular</Label>
                <Input id="phone" type="tel" {...register('phone')} />
              </div>

              <Button className="w-full" type="submit">
                Acessar painel
              </Button>

              <p></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
