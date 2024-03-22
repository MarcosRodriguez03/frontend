'use client';
import { Button, Modal, Label, TextInput, FileInput, Dropdown, Accordion, ListGroup } from 'flowbite-react';
import { useState } from 'react';
//the @ when pathing through our folder structure represents our root foler
import BlogEntrees from '@/utils/BlogEntries.json';
import { iBlogItems } from '@/interfaces/interfaces'
import React from 'react'
import NavBarComponent from '../components/NavbarComponent';

//user dashboard page with their publiced and unpublished blog entries we will also add / edit blog entries 
const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);
    const [blogItems, setBlogItems] = useState<iBlogItems[]>(BlogEntrees);

    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [image, setImage] = useState<any>("");
    const [categories, setCategories] = useState<string>("");

    //booleans
    const [editBool, setEditBool] = useState<boolean>(true);

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
    const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value);
    const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => setCategories(e.target.value);

    const handleShow = () => {
        setOpenModal(true)
        setEditBool(false);
        setCategories("")
        setTitle("")
        setTags("")
        setDescription("")
        setImage("")
    }

    const handlePublish = () => {
        setOpenModal(false);
    }
    const handleEdit = () => {
        setEditBool(true);
        setOpenModal(true);
    }

    const handleDelete = () => {

    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        const file = e.target.files?.[0];


        if (file) {
            reader.onload = () => {
                setImage(reader.result)

            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <NavBarComponent />
            <div className='flex min-h-screen flex-col p-24'>
                <div className="flex flex-col items-center mb-10">
                    <h1 className='text-3xl'>This is the dash board</h1>

                    <>
                        <Button onClick={handleShow}>Add Blog Item</Button>
                        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header> {editBool ? 'Edit' : 'Add'} Blog Item</Modal.Header>
                            <Modal.Body>
                                <form className="flex max-w-md flex-col gap-4">
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="Title" value="Title" />
                                        </div>
                                        <TextInput onChange={handleTitle} id="Title" type="text" placeholder="Enter title" required />
                                    </div>

                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="Description" value="Description" />
                                        </div>
                                        <TextInput onChange={handleDescription} id="Description" type="text" placeholder="Enter Description" required />
                                    </div>

                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="Tags" value="Tags" />
                                        </div>
                                        <TextInput onChange={handleTags} id="Tags" type="text" placeholder="Enter Tags" required />
                                    </div>

                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="Picture" value="Picture" />
                                        </div>
                                        <FileInput onChange={handleImage} accept='image/png, image/jpg' id="Pictures" required placeholder='Choose img' />
                                    </div>

                                    <Dropdown label="Dropdown button" dismissOnClick={true}>
                                        <Dropdown.Item onClick={(() => setCategories("Sports"))}>Sports</Dropdown.Item>
                                        <Dropdown.Item onClick={(() => setCategories("Martial Arts"))}>Martial Arts</Dropdown.Item>
                                        <Dropdown.Item onClick={(() => setCategories("Fitness"))}>Fitness</Dropdown.Item>
                                    </Dropdown>


                                </form>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handlePublish}>Save and Publish</Button>
                                <Button color="gray" onClick={handlePublish}>Save </Button>
                                <Button color="gray" onClick={() => setOpenModal(false)}>Cancel </Button>
                            </Modal.Footer>
                        </Modal>
                    </>

                    <Accordion alwaysOpen>
                        <Accordion.Panel>
                            <Accordion.Title>Published blog item</Accordion.Title>
                            <Accordion.Content>
                                <ListGroup className='w-484 '>

                                    {
                                        blogItems.map((item, idx) => {
                                            return (
                                                <div key={idx}>
                                                    {
                                                        item.isPublished && <div className='flex flex-col p-10'>
                                                            <h1 className='text-2xl'>{item.title}</h1>
                                                            <div className='flex flex-row space-x-3'>
                                                                <Button onClick={handleEdit} color="blue">Edit</Button>
                                                                <Button onClick={handlePublish} color="yellow">Unpublished</Button>
                                                                <Button onClick={handleDelete} color="red">Delete</Button>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>)
                                        })
                                    }


                                </ListGroup>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>unpublished blog item</Accordion.Title>
                            <Accordion.Content>
                                <ListGroup className='w-484 '>

                                    {
                                        blogItems.map((item, idx) => {
                                            return (
                                                <div key={idx}>
                                                    {
                                                        !item.isPublished && <div className='flex flex-col p-10'>
                                                            <h1 className='text-2xl'>{item.title}</h1>
                                                            <div className='flex flex-row space-x-3'>
                                                                <Button onClick={handleEdit} color="blue">Edit</Button>
                                                                <Button onClick={handlePublish} color="yellow">Unpublished</Button>
                                                                <Button onClick={handleDelete} color="red">Delete</Button>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>)
                                        })
                                    }


                                </ListGroup>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>


                </div>

            </div>
        </>


    )
}

export default Dashboard
