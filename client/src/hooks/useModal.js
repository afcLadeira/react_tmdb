import { useState } from "react"

export const useModal = (initialState = false) => {   


    const [modalOpen, setModalOpen] = useState(initialState)   
    const toggle = () =>  setModalOpen(!modalOpen)   
    return [modalOpen, setModalOpen, toggle] 
}