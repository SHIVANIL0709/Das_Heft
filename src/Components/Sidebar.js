import React from 'react';
import './Sidebar.css';
import {
    FaTh,
    FaRegCalendarAlt,
    
} from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
import { RiSettings2Fill } from 'react-icons/ri';
import { MdPlaylistAdd } from 'react-icons/md';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='dashboard'>
                <FaTh />
                <div className='label'>
                    <h6>Dashboard</h6>
                </div>  
            </div>
            <div className='schedule'>
                <FaRegCalendarAlt />
                <div className='label'>
                    <h6>Schedule</h6>
                </div>
            </div>
            <div className='memo'>
                <GrNotes />
                <div className='label'>
                    <h6>Memo</h6>
                </div>
            </div>
            <div className='list'>
                <MdPlaylistAdd />
                <div className='label'>
                    <h6>List</h6>
                </div>

            </div>
            <div className='settings'>
                <RiSettings2Fill />
                <div className='label'>
                    <h6>Settings</h6>
                </div>
            </div>
           </div>
    )
}
