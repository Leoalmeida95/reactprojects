import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props=>
<div role='form' className='todoForm'>
    <div className='row'>
        <Grid cols='12 9 11'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
        </Grid>

        <Grid cols='12 3 1'>
            <IconButton style='primary' icon='plus' ></IconButton>
        </Grid>
    </div>
</div>