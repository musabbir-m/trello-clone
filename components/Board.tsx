"use client"
import React from 'react'
import { DragDropContext,Droppable, Draggable } from 'react-beautiful-dnd';
import { Client } from 'appwrite';

function Board() {
  return (
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='coulumn'>
            {(provided)=><div></div>}
        </Droppable>
    </DragDropContext>
  )
}

export default Board