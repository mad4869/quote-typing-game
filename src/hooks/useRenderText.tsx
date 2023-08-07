import Highlighted from '../components/Highlighted'

const useRenderText = ({ targetText, targetIndex }: GameState) => {
    const text = targetText.split(' ')
    return text.map((word: string, index: number) => {
      return (
        index === targetIndex ?
        <Highlighted key={index}>{word}{index !== text.length - 1 ? ' ' : ''}</Highlighted> :
        <span key={index}>{word}{index !== text.length - 1 ? ' ' : ''}</span>
      )
    })
}

export default useRenderText
