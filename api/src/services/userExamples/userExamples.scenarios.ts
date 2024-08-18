import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String6178778' } },
    two: { data: { email: 'String766615' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
