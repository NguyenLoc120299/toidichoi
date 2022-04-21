import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import style from '../../styles/place.module.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { useToast } from '@chakra-ui/react'
const UploadImage = (props) => {
    const dispatch = useDispatch()
    const [images, setImages] = useState([])
    const toast = useToast()
    const handleChangeImages = e => {
        const files = [...e.target.files]
        let newImages = []

        files.forEach(file => {
            if (!file) return toast({
                title: 'File không được chọn',
                status: "warning",
                position: 'bottom-right',
                isClosable: true,
            })

            if (file.size > 1024 * 1024 * 5) {
                return toast({
                    title: 'Kích thước file quá lớn',
                    position: 'bottom-right',
                    status: "warning",
                    isClosable: true,
                })
            }
            return newImages.push(file)
        })
        if ([...images, ...newImages].length > 20)
            return toast({
                title: 'Số lượng lớn hơn 20 file',
                status: "warning",
                position: 'bottom-right',
                isClosable: true,
            })
        dispatch({
            type: `${props.type}`,
            payload: [...images, ...newImages]
        })
        setImages([...images, ...newImages])
    }
    const deleteImage = (index) => {
        const newImages = [...images]
        newImages.splice(index, 1)
        dispatch({
            type: `${props.type}`,
            payload: newImages
        })
        setImages(newImages)
    }
    return (
        <div className={style.content}>
            {
                images.map((item, index) => (
                    <div className={style.upload_selected} key={index} >
                        <img src={URL.createObjectURL(item)} alt={item} />
                        <div className={style.option} >
                            <Center h={'100%'}>
                                <AiOutlineDelete color='#fff' size={'20px'} onClick={() => deleteImage(index)} />
                            </Center>
                        </div>
                    </div>
                ))
            }
            <div className={style.upload_selected}>
                <label htmlFor={props.name} className='upload_file'>
                    <input type="file"
                        name='file'
                        multiple 
                        accept="image/*"
                        onChange={handleChangeImages}
                        style={{ display: "none" }}
                        id={props.name}></input>
                    <div>
                        <Center>
                            <BsFillCameraFill style={{ fontSize: '16px', color: '#aaa' }} />
                        </Center>
                        <div style={{ marginTop: '1px' }}>Thêm ảnh</div>
                    </div>
                </label>
            </div>
        </div>

    )
}

export default UploadImage