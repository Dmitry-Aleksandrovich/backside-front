
import { EnvType, load } from "ts-dotenv";

type Env = EnvType<typeof schema>

const schema = {
    TOKEN_SECRET: String
}


export let env: Env

export function loadEnv(){
    env = load(schema)
}