import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/marcelo-rafael.png"
        alt="Marcelo Rafael Gopnçalves"
      />
      <div>
        <strong>Marcelo Rafael Gonçalves</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
