import Bands from '../../../data/bands.json'
import {NextResponse} from 'next/server'

export async function GET(req){
 
 return NextResponse.json(Bands)
}