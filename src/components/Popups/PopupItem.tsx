import React, { useCallback, useContext, useEffect } from 'react'
import { X } from 'react-feather'
import styled, { ThemeContext } from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { PopupContent } from '../../state/application/actions'
import { useRemovePopup } from '../../state/application/hooks'
import ListUpdatePopup from './ListUpdatePopup'
import TransactionPopup from './TransactionPopup'

export const StyledClose = styled(X)`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`
export const Popup = styled.div`
  display: inline-block;
  padding: 1em;
  background: linear-gradient(90.04deg, #0C0720 0.04%, #291A83 99.97%);
  position: fixed;
  top: 52px;
  right: 46px;
  border-radius: 10px;
  padding: 20px;
  padding-right: 35px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 290px;
  }
`
const Fader = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

const AnimatedFader = animated(Fader)

export default function PopupItem({
  removeAfterMs,
  content,
  popKey
}: {
  removeAfterMs: number | null
  content: PopupContent
  popKey: string
}) {
  const removePopup = useRemovePopup()
  const removeThisPopup = useCallback(() => removePopup(popKey), [popKey, removePopup])
  useEffect(() => {
    if (removeAfterMs === null) return undefined

    const timeout = setTimeout(() => {
      removeThisPopup()
    }, removeAfterMs)

    return () => {
      clearTimeout(timeout)
    }
  }, [removeAfterMs, removeThisPopup])

  const theme = useContext(ThemeContext)

  let popupContent
  if ('txn' in content) {
    const {
      txn: { hash, success, summary }
    } = content
    popupContent = <TransactionPopup hash={hash} success={success} summary={summary} />
  }
  // else if ('listUpdate' in content) {
  //   const {
  //     listUpdate: { listUrl, oldList, newList, auto }
  //   } = content
  //   popupContent = <ListUpdatePopup popKey={popKey} listUrl={listUrl} oldList={oldList} newList={newList} auto={auto} />
  // }

  const faderStyle = useSpring({
    from: { width: '100%' },
    to: { width: '0%' },
    config: { duration: removeAfterMs ?? undefined }
  })

  return (
    <>
      {('txn' in content) && <Popup>
        <StyledClose color='white' onClick={removeThisPopup} />
        {popupContent}
        {removeAfterMs !== null ? <AnimatedFader style={faderStyle} /> : null}
      </Popup>}
    </>
  )
}
