import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { FaInfo, FaTrash } from 'react-icons/fa';
import Modal from '../../../Modal/Modal';

const EventActions = ({ 
  event,
  DeleteEventAction,
  GetEventAction
}) => {

  const [show_event_info, setShowEventInfo] = useState(false);

  const DeleteEvent = useCallback((e) => {
    e.stopPropagation();
    DeleteEventAction(event.id);
  }, [DeleteEventAction, event]);

  useEffect(() => {
    show_event_info && !event.FullName && GetEventAction(event.EventsInfoId, event.id);
  }, [event, show_event_info, GetEventAction]);

  return (<>
    <div className='h-10 flex justify-center'>
        <div className="absolute flex gap-4 h-fit w-fit px-3 py-3 bg-white cursor-pointer">
            <FaTrash 
            className="text-red-500 text-xl hover:text-black" 
            onClick={(e) => DeleteEvent(e)}></FaTrash>
            <FaInfo 
            className="text-blue-500 text-xl hover:text-black"
            onClick={() => setShowEventInfo(true)}></FaInfo>
        </div>
    </div>
    { show_event_info && <Modal 
    setClose={() => setShowEventInfo(false)} 
    className="flex flex-col justify-center items-center mx-auto">
      <span>{event.FullName}</span>
      <span>{event.Email}</span>
      <span>{event.PhoneNumber}</span>
      <span>{event.Date}</span>
    </Modal>}
  </>)
};

export default EventActions;
