'use client'
import * as React from "react";
import {TextField} from "@mui/material";
import {Control, Controller, FieldValues, useForm} from "react-hook-form";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export interface StarWarsFiltersModel{
    commonFilter: string;
}
export interface StarWarsFiltersProps{
    onSubmit:(data:StarWarsFiltersModel)=>void;
    setDrawerOpened?: (value: (((prevState: boolean) => boolean) | boolean)) => void
}
export default function StarWarsFilters(props:StarWarsFiltersProps){
    const {onSubmit, setDrawerOpened} = props;
    const {control, handleSubmit, reset}  = useForm<StarWarsFiltersModel>({
        values:{
            commonFilter: ''
        }
    });
    return (<div className="p-4">

        <Typography className="m-2 text-center" variant="h5" gutterBottom>
            Filters
        </Typography>
        <p>The filters work with local data, the API don&apos;t have API Filters.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="m-2">
            <Controller
                control={control as any }
                name='commonFilter'
                render={({field}) => {
                    return (
                        <>
                            <TextField
                                {...field}
                                type='text'
                                className='w-full'
                                id='commonFilter'
                                variant='outlined'
                                label='Common filter'
                                name='commonFilter'
                                placeholder='Filter by director or film name'
                                helperText='Ex: A new hope / George lucas'
                            />
                        </>

                    );
                }}
            />

            <Button className="w-full my-3"
                    variant="outlined"
                    type={"submit"}
                    color="success"
                    onClick={
                        ()=>{
                        }
                    }>
                Filter
            </Button>

            <Button className="w-full my-3"
                    variant="outlined"
                    color="secondary"
                    type={'button'}
                    onClick={
                        (e)=>{
                            e.preventDefault()
                            reset()
                            onSubmit({commonFilter:''})
                        }
                    }>
                Reset
            </Button>

            <Button className="w-full my-3"
                    variant="outlined"
                    color="secondary"
                    onClick={
                        (e)=>{
                            e.preventDefault()
                            if(setDrawerOpened) {
                                setDrawerOpened(false);
                            }
                        }
                    }>
                Close
            </Button>
        </form>
    </div>)
}