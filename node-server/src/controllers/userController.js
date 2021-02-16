import mongoose from 'mongoose';
import {UserSchema} from "../models/userModel";
import bcrypt from "bcrypt";
import * as express from 'express';
import jwt from "jsonwebtoken";


const User = mongoose.model('User', UserSchema);

export const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password);
    newUser.save((err, user) => {
        if (err) return res.status(400).send({
            message: err
        })
        else {
            use.hashPassword = undefined;
            return res.json(user);
        }
    })
}

export const login = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            throw err
        }
        if (!user) {
            res.status(401).json({message: 'auth failed: no user found'});
        } else if (user) {
            if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({message: 'auth failed: Wrong password'});
            } else {
                return res.json({
                    token: jwt.sign({
                        email: user.email,
                        username: user.username,
                        _id: user.id
                    }, 'RESTFULAPIs')
                })
            }
        }
    })
}

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.start(401).json({message: 'Unauthorized user'});
    }
}
