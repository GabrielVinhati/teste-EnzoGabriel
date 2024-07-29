import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AcessoOlho {
    TOKEN = `3734d225a6c5714fc999a225c860d31727a6dcfb52c8447561c5de8a13921679`;
    API_OLHO = 'https://aiko-olhovivo-proxy.aikodigital.io'; 

    public endpoints = {
        tokenAcesso: () => `${this.API_OLHO}/Login/Autenticar?token=aiko`,
        busca: (termo: string) => `${this.API_OLHO}/Linha/Buscar?termosBusca=${termo}`,
        buscaDeLinhaSentido: (codigoLinha: string, sentido: string) => `
        ${this.API_OLHO}/Linha/BuscarLinhaSentido?termosBusca=${codigoLinha}&sentido=${sentido}
        `,
        BuscarParadasPorCorredor: (codigoCorredor: string) => `${this.API_OLHO}/Parada/BuscarParadasPorCorredor?codigoCorredor=${codigoCorredor}`
    }

    constructor(private readonly http: HttpClient) {}

    async token(): Promise<boolean> {
        const endpoint = this.endpoints.tokenAcesso();
        try {
            const response: any = await this.http.post<boolean>(endpoint, {}).toPromise();
            return response;
        } catch (error) {
            console.error('Erro na requisição', error);
            return false;
        }
    }

    async busca(): Promise<any> {
        const endpoint = this.endpoints.busca('8000');
        return this.http.get<any>(endpoint).toPromise();
      }

    async buscaLinhaSentido(codigoLinha: string, sentido: string): Promise<any> {
        const endpoint = this.endpoints.buscaDeLinhaSentido(codigoLinha, sentido);
        return this.http.get<any>(endpoint).toPromise();
    }

    async BuscarParadasPorCorredor(codigoCorredor: string): Promise<any>{
        const endpoint = this.endpoints.BuscarParadasPorCorredor(codigoCorredor);
        return this.http.get<any>(endpoint).toPromise();
    }

}
