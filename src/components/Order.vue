<template>
    <header>
        <h5>
            Pedido: {{order.import_info.remote_code}}
        </h5>
    </header>
    <details>
        <summary>
            Pedido
        </summary>
        <p>
            Codigo: {{order.import_info.remote_code}}
        </p>
        <p>
            Canal: {{order.channel}}
        </p>
        <p>
            Data: {{this.formateDate()}}
        </p>
        <p>
            Status: {{this.formateStatus()}}
        </p>
        <p>
            Valor Total: {{order.total_ordered}}
        </p>
        <p>
            Valor Frete: ???
        </p> 
    </details>
    <details>
        <summary>
            Pagamento
        </summary>

        <p v-for="(item, index) in order.payments" :key="index">
            {{index + 1}}º Forma de Pagamento: {{item.description}}, {{item.parcels}} parcelas, valor de {{Number(item.value).toFixed(2)}} 
        </p>
    </details>
    
    <details>
        <summary>
            Cliente
        </summary>
        <p>
            Nome: {{order.customer.name}}
        </p>
        <p>
            E-mail: {{order.customer.email}}
        </p>
        <p>
            E-mail: {{order.customer.phones[0]}}
        </p>
    </details>

    <details>
        <summary>
            Endereço
        </summary>
        <p>
            Cidade: {{order.billing_address.city}}
        </p>
        <p>
            UF: {{order.billing_address.region}}
        </p>
        <p>
            Rua: {{order.billing_address.street}}
        </p>
        <p>
            Bairro: {{order.billing_address.neighborhood}}
        </p>
        <p>
            Número: {{order.billing_address.number}}
        </p>
        <p>
            CEP: {{order.billing_address.postcode}}
        </p>
    </details>
    <details>
        <summary>
            Itens
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>SKU</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(item, index) in this.order.items" >
                    <td>{{item.name}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.original_price}}</td>
                </tr>
            </tbody>
        </table>
    </details>

</template>

<script>

export default {
    name: 'Order',
    props:{
        order: Object
    },
    methods:{
        formateDate(){
            const date = new Date(this.order.placed_at);
            const day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
            const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
            return day + "/"  + month + "/" + date.getFullYear();
        },
        formateStatus(){
            const status = this.order.status.label;
            return String(...status.split(" ").filter((wold) => wold != "(SkyHub)"));
        }
    }
}

</script>

<style lang="scss" scoped>
    table{
        display: block;
        background-color: #8cc;
        td, th{
            padding: 5px;
            text-align: center;
        }
    }
</style>