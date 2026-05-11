import styles from './SnackForm.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  const isEditing = Boolean(editingSnack);
  const isFormValid = validateName() && validateRating();

  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    const num = Number(rating);
    return num >= 1 && num <= 5;
  }

  function getNameError() {
    if (!touched.name) return '';
    if (!validateName()) return 'Snack name is required';
    return '';
  }

  function getRatingError() {
    if (!touched.rating) return '';
    if (!validateRating()) return 'Please select a rating';
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();

    // mark everything as touched
    setTouched({
      name: true,
      rating: true,
    });

    // validate before submitting
    const isNameValid = validateName();
    const isRatingValid = validateRating();

    if (!isNameValid || !isRatingValid) {
      return; // stop submission if invalid
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);

      // reset form using state
      setName('');
      setRating('');
      setTouched({
        name: false,
        rating: false,
      });
    }
  }
  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
      setTouched({ name: false, rating: false });
    }
  }, [editingSnack]);
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={styles['field-input']}
          placeholder="Enter snack name"
        />

        {getNameError() && <p className={styles.error}>{getNameError()}</p>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, rating: true }))}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />

        {getRatingError() && <p className={styles.error}>{getRatingError()}</p>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
