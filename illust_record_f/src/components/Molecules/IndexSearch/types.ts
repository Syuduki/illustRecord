import React from "react"

export interface Props {
    index: 'あ'| 'か'| 'さ'| 'た'| 'な'| 'は'| 'ま'| 'や'| 'ら'| 'わ'| '',
    setIndex: React.Dispatch<React.SetStateAction<'あ'| 'か'| 'さ'| 'た'| 'な'| 'は'| 'ま'| 'や'| 'ら'| 'わ'| ''>>,
    onChange:(keyword: string) => void
}