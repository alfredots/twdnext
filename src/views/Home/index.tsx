'use client'
/*
  To-do
  [x] Validação / transformação
  [x] Field Arrays
  [] Upload de arquivos
  [] Composition Pattern
*/

import { useForm, useFieldArray } from 'react-hook-form'
import { string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from 'lib/supabase'

function toCapitalize(name: string) {
  return name
    .trim()
    .split(' ')
    .map((word) => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    })
    .join()
}

const createUserFormSchema = z.object({
  avatar: z
    .instanceof(FileList)
    .transform((list) => list.item(0)!)
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      'O arquivo deve ter no máximo 5 mb'
    ),
  name: string().nonempty('O nome é obrigatório').transform(toCapitalize),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine((email) => {
      return email.endsWith('@github.com.br')
    }, 'O e-mail precisa ser do Github'),
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
  techs: z
    .array(
      z.object({
        title: z.string().nonempty('O título é obrigatório'),
        knowledge: z.coerce.number().min(1).max(100)
      })
    )
    .min(2, 'Deve adicionar no minimo 2 tecnologias')
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export const HomeView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs'
  })

  function createUser(data: CreateUserFormData) {
    supabase.storage.from('forms-react').upload(data.avatar.name, data.avatar)
    console.log(data)
  }

  function addNewTech() {
    append({ title: '', knowledge: 0 })
  }

  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <form
        className="flex flex-col gap-4 w-full max-w-xs"
        onSubmit={handleSubmit(createUser)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            accept="image/*"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('avatar')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('name')}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="flex items-center justify-between">
            Tecnologias
            <button
              type="button"
              onClick={addNewTech}
              className="text-emerald-500 text-xs"
            >
              Adicionar
            </button>
          </label>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 border border-zinc-200 shadow-sm rounded h-10 px-3"
                    {...register(`techs.${index}.title`)}
                  />

                  <input
                    type="number"
                    className="w-16 border border-zinc-200 shadow-sm rounded h-10 px-3"
                    {...register(`techs.${index}.knowledge`)}
                  />
                </div>
                <span>
                  {errors.techs?.[index]?.title && (
                    <span className="text-red-500 text-sm">
                      {errors.techs?.[index]?.title?.message}
                    </span>
                  )}
                </span>
              </div>
            )
          })}
          <span>
            {errors.techs && (
              <span className="text-red-500 text-sm">
                {errors.techs.message}
              </span>
            )}
          </span>
        </div>

        <button
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white hover:bg-emerald-600"
        >
          Salvar
        </button>
      </form>
    </main>
  )
}
