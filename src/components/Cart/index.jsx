import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMaskInput } from 'react-imask'

import API_URL from '../../services/api'

import {
  close,
  remove,
  clear
} from '../../reducers/cart'

import lixeira from '../../assets/images/lixeira.png'

import {
  Overlay,
  Sidebar,
  CartItem,
  ProductImage,
  Info,
  ProductName,
  Price,
  RemoveButton,
  Total,
  TotalValue,
  CheckoutButton,
  BackButton,
  ButtonGroup,
  Title,
  Label,
  Input,
  Row,
  Text
} from './styles'


function Cart() {

  const dispatch = useDispatch()


  const {
    items,
    isOpen
  } = useSelector(
    (state) => state.cart
  )


  const [
    currentStep,
    setCurrentStep
  ] = useState('cart')


  const [
    orderId,
    setOrderId
  ] = useState('')



  const [
    delivery,
    setDelivery
  ] = useState({

    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''

  })



  const [
    payment,
    setPayment
  ] = useState({

    cardName: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''

  })



  if (!isOpen) {
    return null
  }



  const getTotalPrice = () => {

    return items.reduce(
      (total, item) =>
        total + Number(item.preco),
      0
    )

  }



  const finishOrder = async () => {

    try {


      const response = await fetch(
        `${API_URL}/checkout`,
        {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },


          body: JSON.stringify({

            products: items.map(
              (item) => ({

                id: item.id,

                price: Number(
                  item.preco
                )

              })
            ),


            delivery: {

              receiver:
                delivery.receiver,


              address: {

                description:
                  delivery.address,

                city:
                  delivery.city,

                zipCode:
                  delivery.zipCode,

                number:
                  Number(
                    delivery.number
                  ),

                complement:
                  delivery.complement

              }

            },


            payment: {

              card: {

                name:
                  payment.cardName,

                number:
                  payment.cardNumber,

                code:
                  Number(
                    payment.cvv
                  ),


                expires: {

                  month:
                    Number(
                      payment.expiresMonth
                    ),

                  year:
                    Number(
                      payment.expiresYear
                    )

                }

              }

            }

          })

        }
      )


      if (!response.ok) {
        throw new Error(
          'Erro no checkout'
        )
      }


      const data =
        await response.json()



      setOrderId(
        data.orderId
      )



      setCurrentStep(
        'confirmation'
      )



    } catch(error) {

      console.error(error)

      alert(
        'Erro ao finalizar pedido'
      )

    }

  }

    return (

    <Overlay>

      <Sidebar>


        {currentStep === 'cart' && (

          <>

            {items.map((item) => (

              <CartItem
                key={item.id}
              >

                <ProductImage
                  src={item.foto}
                  alt={item.nome}
                />


                <Info>

                  <ProductName>
                    {item.nome}
                  </ProductName>


                  <Price>
                    R$ {Number(item.preco)
                      .toFixed(2)
                      .replace('.', ',')}
                  </Price>


                </Info>


                <RemoveButton
                  onClick={() =>
                    dispatch(
                      remove(item.id)
                    )
                  }
                >

                  <img
                    src={lixeira}
                    alt="Remover produto"
                  />

                </RemoveButton>


              </CartItem>

            ))}



            <Total>

              <span>
                Valor total
              </span>


              <TotalValue>

                R {getTotalPrice()
                  .toFixed(2)
                  .replace('.', ',')}

              </TotalValue>


            </Total>




            <ButtonGroup>

              <CheckoutButton
                onClick={() =>
                  setCurrentStep(
                    'delivery'
                  )
                }
              >

                Continuar com a entrega

              </CheckoutButton>


            </ButtonGroup>



          </>

        )}






        {currentStep === 'delivery' && (

          <>

            <Title>
              Entrega
            </Title>



            <Label>
              Quem irá receber
            </Label>

            <Input

              value={
                delivery.receiver
              }

              onChange={(e) =>
                setDelivery({

                  ...delivery,

                  receiver:
                    e.target.value

                })
              }

            />



            <Label>
              Endereço
            </Label>

            <Input

              value={
                delivery.address
              }

              onChange={(e) =>
                setDelivery({

                  ...delivery,

                  address:
                    e.target.value

                })
              }

            />



            <Label>
              Cidade
            </Label>

            <Input

              value={
                delivery.city
              }

              onChange={(e) =>
                setDelivery({

                  ...delivery,

                  city:
                    e.target.value

                })
              }

            />



            <Label>
              CEP
                
            </Label>

            <Input
            as={IMaskInput}
            mask="00000-000"

              value={
                delivery.zipCode
              }

              onChange={(e) =>
                setDelivery({

                  ...delivery,

                  zipCode:
                    e.target.value

                })
              }

            />



            <Label>
              Número
            </Label>

            <Input
            

              value={
                delivery.number
              }

              onChange={(e) =>
                setDelivery({

                  ...delivery,

                  number:
                    e.target.value

                })
              }

            />



            <Label>
              Complemento (opcional)
            </Label>

            <Input

              value={
                delivery.complement
              }

              onChange={(e) =>
                setDelivery({

                  ...delivery,

                  complement:
                    e.target.value

                })
              }

            />




            <ButtonGroup>


              <CheckoutButton
                onClick={() => {
                  if (
                    !delivery.receiver ||
                    !delivery.address ||
                    delivery.zipCode.length !== 9 ||
                    !delivery.city
                  ) {
                    alert('Preencha todos os campos corretamente!')
                    return
                  }

                  setCurrentStep('payment')
                }}
              >
                Continuar com pagamento
              </CheckoutButton>




              <BackButton

                onClick={() =>
                  setCurrentStep(
                    'cart'
                  )
                }

              >

                Voltar para o carrinho

              </BackButton>


            </ButtonGroup>



          </>

        )}

                {currentStep === 'payment' && (

          <>

            <Title>
              Pagamento
            </Title>


            <h3>
              Valor a pagar: R$ {getTotalPrice()
                .toFixed(2)
                .replace('.', ',')}
            </h3>




            <Label>
              Nome no cartão
            </Label>

            <Input

              value={
                payment.cardName
              }

              onChange={(e) =>
                setPayment({

                  ...payment,

                  cardName:
                    e.target.value

                })
              }

            />




            <Label>
              Número do cartão
            </Label>

            <Input
            as={IMaskInput}
            mask="0000 0000 0000 0000"

              value={
                payment.cardNumber
              }

              onChange={(e) =>
                setPayment({

                  ...payment,

                  cardNumber:
                    e.target.value

                })
              }

            />





            <Row>


              <div>

                <Label>
                  CVV
                </Label>


                <Input
                as={IMaskInput}
                mask="000"

                  value={
                    payment.cvv
                  }

                  onChange={(e) =>
                    setPayment({

                      ...payment,

                      cvv:
                        e.target.value

                    })
                  }

                />


              </div>





              <div>

                <Label>
                  Mês
                </Label>


                <Input
                as={IMaskInput}
                mask="00"

                  value={
                    payment.expiresMonth
                  }


                  onChange={(e) =>
                    setPayment({

                      ...payment,

                      expiresMonth:
                        e.target.value

                    })
                  }

                />


              </div>






              <div>

                <Label>
                  Ano
                </Label>


                <Input
                as={IMaskInput}
                mask="0000"

                  value={
                    payment.expiresYear
                  }


                  onChange={(e) =>
                    setPayment({

                      ...payment,

                      expiresYear:
                        e.target.value

                    })
                  }

                />


              </div>


            </Row>





            <ButtonGroup>


              <CheckoutButton
  onClick={() => {
    if (
      !payment.cardName ||
      payment.cardNumber.length !== 19 ||
      payment.cvv.length !== 3 ||
      payment.expiresMonth.length !== 2 ||
      payment.expiresYear.length !== 4
    ) {
      alert('Preencha os dados do cartão corretamente!')
      return
    }

    finishOrder()
  }}
>
  Finalizar pagamento
</CheckoutButton>





              <BackButton

                onClick={() =>
                  setCurrentStep(
                    'delivery'
                  )
                }

              >

                Voltar para endereço

              </BackButton>



            </ButtonGroup>


          </>

        )}







        {currentStep === 'confirmation' && (

          <>

            <Title>
              Pedido realizado!
            </Title>




            <h3>
              Número do pedido: {orderId}
            </h3>





            <Text>

              Estamos felizes em informar que
              seu pedido já está em processo de
              preparação e, em breve, será entregue
              no endereço informado.

            </Text>





            <Text>

              Gostaríamos de ressaltar que nossos
              entregadores não estão autorizados
              a realizar cobranças extras.

            </Text>





            <Text>

              Lembre-se da importância de higienizar
              as mãos após o recebimento do pedido,
              garantindo assim sua segurança e bem-estar.

            </Text>





            <Text>

              Esperamos que desfrute de uma deliciosa
              experiência gastronômica.
              Bom apetite!

            </Text>





            <ButtonGroup>


              <CheckoutButton

                onClick={() => {

                  dispatch(close())


                  setCurrentStep(
                    'cart'
                  )


                  setOrderId('')



                  setDelivery({

                    receiver: '',
                    address: '',
                    city: '',
                    zipCode: '',
                    number: '',
                    complement: ''

                  })



                  setPayment({

                    cardName: '',
                    cardNumber: '',
                    cvv: '',
                    expiresMonth: '',
                    expiresYear: ''

                  })

                }}

              >

                Concluir

              </CheckoutButton>



            </ButtonGroup>



          </>

        )}

              </Sidebar>

    </Overlay>

  )

}


export default Cart