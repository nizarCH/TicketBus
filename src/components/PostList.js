import React from 'react'
import {
    List,Datagrid, TextField, DataField, EditButton, DeleteButton
} from 'react-admin'

export const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='publishedAt'/>
                <EditButton basePath='/posts'/>
                <DeleteButton basePath='/posts'/>
            </Datagrid>
        </List>
    )
}

export default PostList;