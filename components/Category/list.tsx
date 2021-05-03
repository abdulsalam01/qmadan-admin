import { useState, useEffect } from "react";
import { pluck, tap, map, mergeMap } from "rxjs/operators";
import { Category } from "./category";
import HTTP from '../../services/http';

function List() {
    // http-client
    const _http: HTTP = new HTTP();
    // state
    const [list, setList] = useState([]);
    // columns
    const columns: string[] = ['No', '_id', 'Title', 'Logo', 'Created At', 'Action'];
    
    const fetch = (payload: any = {}) => {
        _http.postRequest('', payload)
            .pipe(
                mergeMap((response: JSON) => response.json()),
                map((response: any) => response.data?.categories?.list),
                tap((res: Category[]) => setList(res))
            )
        .subscribe();
    }
    
    const _delete = (id: string) => {

    }

    const _update = (id: string, payload: Category) => {

    }
    
    useEffect(() => {
        fetch({
            query: `
                query {
                    categories {
                        list {
                            _id
                            title
                            logo
                            created_at
                        }
                        pages
                        extras
                    }
                }
        `})
    })
    
    return (
        <div className="list">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {columns.map((n: string) => (
                            <th scope="col" align="center" className="text-center">{n}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.map((value: Category, index: number) => (
                        <tr key={index}>
                            <td scope="row" align="center" valign="middle">{index+1}</td>
                            <td scope="row" align="center" valign="middle">{value._id}</td>
                            <td scope="row" align="center" valign="middle">{value.title}</td>
                            <td scope="row" align="center" valign="middle" width="20%">
                                <img src={value.logo} alt={value.logo} className="img-fluid w-50"/>
                            </td>
                            <td scope="row" align="center" valign="middle">{value.created_at}</td>
                            <td scope="row" width="15%" align="center" valign="middle">
                                <div className="row">
                                    <div className="col-6">
                                        <a href="#" className="btn btn-sm btn-warning">Edit</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="btn btn-sm btn-danger">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;