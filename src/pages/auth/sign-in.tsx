import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos o link de autenticação para o seu email')
  }

  return (
    <>
      <Helmet titleTemplate="SignIn" />
      <div className="p-8">
        <Button className="absolute right-4 top-8" variant="ghost">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="w-{350px} flex flex-col justify-center gap-6">
          <div>
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tighter">
                Acessar painel
              </h1>
              <p className="text-sm text-muted-foreground">
                Acompanhe suas vendas pelo painel do parceiro
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Seu E-mail</Label>
                <Input id="email" type="email" {...register('email')} />
              </div>

              <Button className="w-full" type="submit">
                Acessar painel
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
