import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';
import CloseIcon from '@mui/icons-material/Close';

const FloatingNotePad = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [note, setNote] = useState(sessionStorage.getItem('note') || '');

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
    sessionStorage.setItem('note', event.target.value);
  };

  useEffect(() => {
    const savedNote = sessionStorage.getItem('note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleToggleVisibility}
        startIcon={<NoteIcon />}
        style={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        {isVisible ? 'Cerrar Bloc de Notas' : 'Abrir Bloc de Notas'}
      </Button>
      {isVisible && (
        <div
          style={{
            
            position: 'fixed',
            bottom: 70,
            right: 20,
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            zIndex: 1000,
            width: 350,
            height: 250,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5>Bloc de Notas</h5>
            <Button onClick={handleToggleVisibility} size="small">
              <CloseIcon />
            </Button>
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="note"
            label="Escribe tu nota aquí"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={note}
            onChange={handleNoteChange}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingNotePad;
