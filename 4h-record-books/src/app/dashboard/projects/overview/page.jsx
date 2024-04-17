"use client"

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import demoData from '@/app/demoData.json';
import BackNavBtn from '@/app/components/BackNavBtn';

function Card(props) {
    var title = props.title;
    
    return (
        <div className={classes.cardTitle}>{title}</div>
    )
}

export default function Overview() {
    return (
        <main>
            <ActionBar title="Project Overview" disableBack={false} />

            <div className={classes.title}>Project Overview</div>
            
            <div className={classes.cardContainer}>
                <div className={classes.cardGroup}>
                    <Card title = "Animal Inventory and Purchases" />
                    
                    <Link href={{pathname: "overview/supplyInventory"}}>
                        <Card title = "Equipment, Supplies, and Feed Inventory" />
                    </Link>

                    <Card title = "Other Expenses" />

                    <Link href={{pathname: "overview/feedRecord"}}>
                        <Card title = "Feed Record" />
                    </Link>
                </div>
            </div>
            
        
        </main>
    )
}