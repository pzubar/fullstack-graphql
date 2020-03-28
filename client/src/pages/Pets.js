import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'

const CREATE_PET = gql`
    mutation CreateAPet($newPet: NewPetInput!) {
        addPet(input: $newPet) {
            id
            name
            type
        }
    }
`

const ALL_PETS = gql`
    query AllPets {
        pets {
            id
            name
            type
            img
        }
    }
`
export default function Pets() {
  const [modal, setModal] = useState(false)
  const { data: petsData, loading: petsLoading, error } = useQuery(ALL_PETS)
  const [createPet, newPet] = useMutation(CREATE_PET)

  const onSubmit = input => {
	setModal(false)
	createPet({ variables: { newPet: input } })
  }

  if (petsLoading || newPet.loading) {
	return <Loader/>
  }

  if (error || newPet.error) {
	return <p>Error occurred: {JSON.stringify(error || newPet.error)}</p>
  }

  if (modal) {
	return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)}/>
  }

  return (
	  <div className="page pets-page">
		<section>
		  <div className="row betwee-xs middle-xs">
			<div className="col-xs-10">
			  <h1>Pets</h1>
			</div>

			<div className="col-xs-2">
			  <button onClick={() => setModal(true)}>new pet</button>
			</div>
		  </div>
		</section>
		<section>
		  <PetsList pets={petsData.pets}/>
		</section>
	  </div>
  )
}
