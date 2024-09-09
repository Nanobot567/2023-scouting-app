import { useState } from 'react'
import Title from '../components/Title'
import CheckboxList from '../components/CheckboxList'
import NumberPicker from '../components/NumberPicker'
import LineBreak from '../components/LineBreak'
import Toggle from '../components/Toggle'
import Textarea from '../components/Textarea'
import Header from '../components/Header'
//import './App.css'

function PostGame() {
  return (
    <>
        <Title text='Postgame' />
        <CheckboxList id="technicalIssues" items={["Note stuck in robot", "Disabled", "Part fell off / broke"]}></CheckboxList>
        <LineBreak />
        <NumberPicker id='penaltyPoints' label='Penalty Points' max={20}></NumberPicker>
        <LineBreak />
        <Toggle label="Got coopertition point?" id="coopertition" />
        <LineBreak />
        <Header text='Scouter notes' required={true}></Header>
        <Textarea id="scouterNotes"/>
    </>
  )
}

export default PostGame

