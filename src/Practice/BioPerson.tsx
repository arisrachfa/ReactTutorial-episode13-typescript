import React from 'react'
import {Person, Country} from './Person'

// Kelebihan dari menggunakan typeScript dibandingkan dengan JS biasa yaitu dalam mendefinisikan type data yaitu secara langsung/dari awal
// hal ini dapat menghindari kelalaian data/ salah input data dengan type data yang berbeda dengan yang diharuskan.
// kelebihan TS dibandq dengan propTypes untuk Type Safety yaitu ketika, di TS terdapat tipe data yang tidak sama maka
// program akan berhenti / crash, namun jika menggunakan package propTypes hanya akan ada peringatan di log console dan program masih dapat berjalan


const BioPerson = () => {
  return (
    <div className='App'>
        <Person
            name="Aris" // jika diganti dengan tipe data selain string maka akan langsung terjadi error cth: {2} yg dimana tipe data number
            email="aris@mail.com"
            age={23}
            isMarried={true}
            friends={["jack", "brian", "james"]}
            country={Country.UK}
        />
    </div>  )
}

export default BioPerson