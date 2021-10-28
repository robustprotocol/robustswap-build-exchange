import React from 'react'
import { Modal } from '@robustswap-libs/uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  const panelExpand = document.getElementsByClassName("sc-ehCJOs dBBlTf")[0]
  const panelZoomin = document.getElementsByClassName("sc-ehCJOs dIEhcc")[0]
  const marginLeft = panelExpand ? panelExpand.clientWidth : panelZoomin ? panelZoomin.clientWidth : 0;

  return (
    <Modal title="Settings" onDismiss={onDismiss} margin={`0px 0px 0px ${marginLeft}px`}>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
    </Modal>
  )
}

export default SettingsModal
