import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository";

import {sign } from "jsonwebtoken";
import { compare } from "bcrypt";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    }
    token: string;
}

@injectable()
class AuthenticateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest): Promise<IResponse>{
        //Usuario existe
        const user = await this.usersRepository.findByEmail(email);
        if(!user) {
            throw new AppError("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        //Senha esta correta

        if(!passwordMatch){
            throw new AppError("Email or password incorrect!");
        }

        //Gerar jsonwebtoken
        const token = sign({}, "b1cbabc8a44e078a64802363e7e0bd48",{
          subject: user.id,
          expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return  tokenReturn;
    }
}

export { AuthenticateUserUseCase }