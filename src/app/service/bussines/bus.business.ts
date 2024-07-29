import { Injectable } from "@angular/core";
import { AcessoOlho } from "../api/acesso.api";

@Injectable({ providedIn: 'root' })
export class busBusiness {
    constructor(
        private readonly busApi: AcessoOlho
    ){
    }

    async ObterToken(){
        return await this.busApi.token();
    }

    async busca(): Promise<any> {
        try {
          const data = await this.busApi.busca();
          return data;
        } catch (error) {
          console.error('Erro na camada Business:', error);
          throw error; // rethrow the error if needed
        }
      }
    
    async buscaComSentido(codigoLinha: string, sentido: string): Promise<any>{
        try{
            const data = await this.busApi.buscaLinhaSentido(codigoLinha, sentido);
            return data;
        }catch(error){
            console.error('Erro na camada Business:', error);
            throw error; // rethrow the error if needed
        }
    }
}